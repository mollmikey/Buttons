import { useState } from "react";

function Send() {
  const [isSending, setIsSending] = useState(false);

  const handleClick = () => {
    setIsSending(true);

    // Reset the animation after it completes
    setTimeout(() => {
      setIsSending(false);
    }, 700); // Match the duration of the send-animation (0.7s)
  };

  return (
    <>
      <button className="send" onClick={handleClick}>
        <div className="svg-wrapper-1">
          <div className={`svg-wrapper ${isSending ? "active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button>
    </>
  );
}

export default Send;
