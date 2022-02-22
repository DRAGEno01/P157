AFRAME.registerComponent("posters", {
    init: function () {
      this.placesContainer = this.el;
      this.posters()
    },
  
    posters: function () {
      const postersRef = [
        {
          id: "superman",
          url: "./assets/superman-poster.jpg",
        },
        {
          id: "spiderman",
          url: "./assets/spiderman-poster.jpg",
        },
  
        {
          id: "captain-aero",
          url: "./assets/captain-aero-poster.jpg",
        },
        {
          id: "OuterSpace",
          url: "./assets/outer-space-poster.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id)
        const poster = this.createPosters(item)
        borderEl.appendChild(posterEl)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:22,
        height:40
      });
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"green",
        opacity:0.4
      });
      return entityEl;
    },
    // Thumbnail Element
    createPosters: function(item){
     const entityEl = document.createElement("a-entity")
     entityEl.setAttribute("visible",true)
     entityEl.setAttribute("geometry",{
       primitive:"circle",
       radius:9
     });
     entityEl.setAttribute("material",{
       src:item.url
     });
     return entityEl;
   },
    // Title Text Element
      createTitle:function(position,item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28
      });
      entityEl.setAttribute("position",{
        x:0,y:5,z:0.1
      })
      entityEl.setAttribute("material",{
        src="item.url"
      })
      return entityEl;
    }
  });