AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      feluda1: {
        banner_url: "./assets/posters/Feluda_and_Topshe.png",
        title: "The Mystrey Of Magic",
        released_year: "1965",
        description:
          "Since 1965, the year of it's apperance Pradosh Mitter (Feluda) became the superhero of every bengali childs. Mr. Satyajit Ray, the world-known film director made his debute in the world of detective literature.",
      },
      feluda2: {
        banner_url: "./assets/posters/banner.png",
        title: "The Murder In Gangtok",
        released_year: "1965",
        description:
          "Can Feluda solve the mystrey of murder of S.Shelvankar?",
      },
      "shanku1": {
        banner_url: "./assets/posters/ps.png",
        title: "Mystrey Of Macaw",
        released_year: "1961",
        description:
          "One of world's most acclaimed science-fiction character, Proffesor Shanku, created by Satyajit Ray, started his mission to solve some amazing mystries",
      },
      "shanku2": {
        banner_url: "./assets/posters/banner2.png",
        title: "The Mystrey Of Unicorn",
        released_year: "1961",
        description:
          "Enter to the mystreious world of Tibbet!",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
