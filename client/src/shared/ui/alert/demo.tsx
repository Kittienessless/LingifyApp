/* import { useAlert } from "./components/Alert";

function App() {
  const { alert } = useAlert();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={() =>
            alert({
              title: "Notify",
              message: "Notification message",
              autoClose: true,
            })
          }
        >
          Notify
        </button>

        <button
          onClick={() =>
            alert({
              title: "Prompt without feedback",
              message: "Question to ask user before proceeding",
              actions: [
                {
                  text: "Cancel",
                },
                {
                  text: "Confirm",
                  callback: () => {
                    console.log('Confirmed')
                    // action to proceed
                  },
                },
              ],
            })
          }
        >
          Prompt without Feedback
        </button>
        <button
          onClick={() =>
            alert({
              title: "Prompt with feedback",
              message:
                "Question to ask user before proceeding. Expecting message from user",
              inputProps: { placeholder: "Enter feedback" },
              actions: [
                {
                  text: "Cancel",
                },
                {
                  text: "Confirm",
                  callback: (feedback) => {
                    console.log(feedback);
                    // action to proceed
                  },
                },
              ],
            })
          }
        >
          Prompt with Feedback
        </button>
      </header>
    </div>
  );
} */