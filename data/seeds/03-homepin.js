exports.seed = function (knex) {
    return knex("home_pins")
      .then(() => {
        return knex("home_pins").insert([
          {
            home_id: 1,
            user_id: 1,
            address: "16080 Challis Street, Fountain Valley, CA 92708",
            lat: 27.2046,
            lng: -77.4977,
            title: "Mi casa!",
            description: "Home sweet home",
            image_url: "https://maps.googleapis.com/maps/api/streetview?channel=mb-pdp-publicrecord&location=16080+Challis+St%2C+Fountain+Valley%2C+CA+92708&size=665x441&source=outdoor&client=gme-redfin&signature=VPGYq7ncMl8AF4C0Ym8mQIC1LrI=",
          },
        ]);
      });
  };
  