const Html = window.Html, TwinBox = window.TwinBox, css = window.css;

let appName = "EaglercraftX",
  appIcon = "assets/apps/help/favicon.webp",
  WinBox = window.WinBox,
  wb;

const pkg = {
  name: "Example App",
  type: "app",
  privs: 0,
  start: async function (Root) {

    // Create a window with WinBox
    wb = await TwinBox({
      title: appName,
      icon: appIcon,
      width: "400px",
      height: "400px",
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
    new Html("div").attr({height: "100%", width: "100%"}).style({height: "100%", width: "100%", position: "absolute", "top": "0", "left": "0"}).appendMany(
	new Html("iframe").attr({src: 'https:/envyjs.github.io/appstore/eagler/X/app.html', "height": "100%"}),
).appendTo(wrapper);
  },
  end: async function () {
    // Close the window when the process is exited
    wb.close();
  },
};

export default pkg;
