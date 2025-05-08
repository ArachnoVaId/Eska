import { MidtransCallbacks } from "@/types/midtrans";
import { api } from "./axiosSetup";
import axios from "axios";

interface CallbackInterface {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showLoading: (message: string) => void;
  dismissLoading: () => void;
}

const createCallbacks = ({
  showSuccess,
  showError
}: CallbackInterface): MidtransCallbacks => ({
  onSuccess: () => {
    window.location.reload();
  },
  onPending: () => {
    showSuccess(
      "Payment initiated. Please complete it to finalize your registration."
    );
    window.location.reload();
  },
  onError: () => {
    showError("Payment failed or was cancelled. Please try again.");
  },
  onClose: () => {
    showError("Payment popup closed. No transaction was made.");
    window.location.reload();
  }
});

export const initiatePayment = ({
  token,
  snapInitialized,
  callbacks
}: {
  token: string;
  snapInitialized: boolean;
  callbacks: CallbackInterface;
}) => {
  callbacks.dismissLoading();
  if (!window.snap || !snapInitialized) {
    callbacks.showError("Snap not ready");
    return;
  }
  window.snap.pay(token, createCallbacks(callbacks));
};

export const cancelPayment = async ({
  order_id,
  callbacks
}: {
  order_id: string;
  callbacks: CallbackInterface;
}) => {
  try {
    callbacks.showLoading("Cancelling payment...");
    const res = await api.post("/api/midtrans/cancel", { order_id });
    if (res.data.success) {
      callbacks.dismissLoading();
      callbacks.showSuccess("Cancelled successfully");
      window.location.reload();
    } else throw new Error(res.data.message);
  } catch (err) {
    callbacks.dismissLoading();
    if (axios.isAxiosError(err)) {
      callbacks.showError("Cancel failed: " + err.response?.data.message);
    } else {
      callbacks.showError("Cancel failed: " + err);
    }
  }
};
