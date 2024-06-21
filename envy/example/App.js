import Html from "../../libs/html.js";
import TwinBox from "../../libs/twinbox.js";
import css from "../../libs/css.js";

let appName = "Example App",
  appIcon = "assets/apps/help/favicon.webp",
  WinBox = window.WinBox,
  wb;

const pkg = {
  name: "Example App",
  type: "app",
  privs: 0,
  start: async function (Root) {
    console.log("Hello from example app", Root);

    // Create a window with WinBox
    wb = await TwinBox({
      title: appName,
      icon: appIcon,
      width: "400px",
      height: "365px",
      mica: true,
      padding: true,
      style:  css`
      .wb-body {
        color: red;
      }
      `
    });

    // Get the window body
    const wrapper = wb.body;

    // Add content to the window
    new Html("h1").text("Example App").appendTo(wrapper);
    new Html("p").text("This is the example app").appendTo(wrapper);
  },
  end: async function () {
    // Close the window when the process is exited
    wb.close();
  },
};

export default pkg;
