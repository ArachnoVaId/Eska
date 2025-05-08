import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";
import type { RegisterCard } from "@/types/register-card";
import { cn } from "@/lib/utils";

type RegisterCardProps = RegisterCard & {
  className?: string;
  isSecondButton?: boolean;
  openInNewTab?: boolean;
};

const RegisterCard = ({
  title,
  image,
  buttonLabel,
  buttonLink,
  secondButtonLabel,
  secondButtonLink,
  className,
  isSecondButton = false,
  openInNewTab = false,
}: RegisterCardProps) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center space-y-4"
    >
      <div className="max-xl:w-[300px] w-[360px] flex flex-col items-center max-lg:space-y-2 space-y-7">
        <h3 className="font-semibold max-lg:text-2xl max-xl:text-3xl text-4xl text-center text-putih italic max-lg:h-fit h-16 w-full">
          {title}
        </h3>
        <div
          className={cn(
            "flex flex-col space-y-7 items-center justify-center p-6 w-full",
            className,
          )}
        >
          <div className="w-full h-[450px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
          <div
            className={cn(
              "w-full flex flex-col space-y-4",
              isSecondButton && "items-end justify-center lg:min-h-[150px]",
            )}
          >
            <Button
              className="w-full rounded-4xl text-putih max-xl:text-lg text-xl font-medium"
              variant="biruMudaHover"
              asChild
              size="icon"
            >
              {openInNewTab ? (
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                  {buttonLabel}
                  <FaArrowRightLong />
                </a>
              ) : (
                <a href={buttonLink}>
                  {buttonLabel}
                  <FaArrowRightLong />
                </a>
              )}
            </Button>

            {secondButtonLabel && secondButtonLink && (
              <Button
                className="w-full rounded-4xl text-putih max-xl:text-lg text-xl font-medium"
                variant="biruMudaHover"
                asChild
                size="icon"
              >
                {openInNewTab ? (
                  <a
                    href={secondButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondButtonLabel}
                    <FaArrowRightLong />
                  </a>
                ) : (
                  <a href={secondButtonLink}>
                    {secondButtonLabel}
                    <FaArrowRightLong />
                  </a>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
