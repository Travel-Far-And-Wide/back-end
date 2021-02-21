exports.seed = function (knex) {
    return knex("pins")
      .then(() => {
        return knex("pins").insert([
          { pin_id: 1,
            user_id: 1,
            name: "Hawaiian Gardens",
            address: "11871 E Carson St Hawaiian Gardens CA 90716",
            lat: 33.83249402797066,
            lng: -118.08036804199219,
            date: "2021-02-18",
            title: "Casino Visit!",
            description: "Your test data",
            image_url: "https://media.istockphoto.com/photos/casino-element-isolation-on-the-colorful-slot-machine-roulette-while-picture-id1142572029?k=6&m=1142572029&s=612x612&w=0&h=t4wN--gstSSWR6qEttr0vgQl09XvcoRG48uxF21vayo=",
            category: "Vacation",
            visited: false
          },
        ]);
      });
  };
  