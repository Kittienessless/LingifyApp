import { useState } from "react";
import { useAlert } from ".";
import styles from "./styles.module.css";

 
export const Alert = () => {
  const { notification, alertShown, close } = useAlert();
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <div
      className={`
        ${styles.alert_container} ${alertShown ? styles.show : ''}`}
    >
      <div className={styles.alert}>
        <div className={styles.alert_content}>
          <p className={styles.alert_title}>{notification?.title || ""}</p>

          <div className={styles.alert_body}>
            <p>{notification?.message || ""}</p>
          </div>

          {notification?.inputProps && (
            <div className={styles.alert_textinput}>
              <input
                value={textInputValue}
                onChange={(e) => setTextInputValue(e.target.value)}
                {...notification?.inputProps}
              />
            </div>
          )}

          <div className={styles.alert_action}>
            {(notification?.actions || []).map((action) => (
              <div key={action.text} className={styles.btn}>
                <button
                  {...action.props}
                  onClick={() => {
                    action.callback?.(textInputValue);
                    setTextInputValue("");
                    close();
                  }}
                >
                  {action.text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
