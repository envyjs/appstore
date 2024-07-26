const Html = window.Html, TwinBox = window.TwinBox, css = window.css;

const pkg = {
  name: "Webamp",
  type: "app",
  privs: 0,
  start: async function (Root) {
    new Html("div").id("app").appendTo("body");

    const app = document.getElementById("app")
    const webamp = new Webamp();
    webamp.renderWhenReady(app);

  },
  end: async function () {
    // Close the window when the process is exited
    wb.close();
  },
};

export default pkg;
