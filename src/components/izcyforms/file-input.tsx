import { UseFormRegisterReturn } from "react-hook-form";

type FileInputProps = {
  fieldName: string;
  fileName: string;
  register: UseFormRegisterReturn;
  onFileChange: (fieldName: string, file: File) => void;
  disabled: boolean;
  accept?: string;
};

const FileInput: React.FC<FileInputProps> = ({
  fieldName,
  fileName,
  register,
  onFileChange,
  disabled,
  accept = "image/*"
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileChange(fieldName, file);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldName}
        className={`px-4 py-2 rounded-lg bg-[#D9D9D9] text-2xl text-black cursor-pointer text-center ${
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
        }`}
      >
        {fileName ? "Change File" : "Choose File"}
      </label>

      <input
        id={fieldName}
        type="file"
        accept={accept}
        disabled={disabled}
        {...register}
        onChange={(e) => {
          register.onChange(e);
          handleChange(e);
        }}
        className="hidden"
      />

      {fileName && (
        <span className="text-putih text-lg">Selected: {fileName}</span>
      )}
    </div>
  );
};

export default FileInput;
