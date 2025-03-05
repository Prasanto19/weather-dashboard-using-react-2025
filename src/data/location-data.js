const data = [
  {
    location: "Aichi",
    latitude: 35.1815,
    longitude: 136.9064,
  },
  {
    location: "Kitakyushu",
    latitude: 33.8333,
    longitude: 130.8333,
  },
  {
    location: "Sendai",
    latitude: 38.2689,
    longitude: 140.8719,
  },
  {
    location: "Hiroshima",
    latitude: 34.3963,
    longitude: 132.4594,
  },
  {
    location: "Kawasaki",
    latitude: 35.5206,
    longitude: 139.7172,
  },
  {
    location: "Kyoto",
    latitude: 35.0211,
    longitude: 135.7538,
  },
  {
    location: "Kobe",
    latitude: 34.6913,
    longitude: 135.183,
  },
  {
    location: "Fukuoka",
    latitude: 33.6064,
    longitude: 130.4181,
  },
  {
    location: "Sapporo",
    latitude: 43.0642,
    longitude: 141.3469,
  },
  {
    location: "Osaka",
    latitude: 34.6937,
    longitude: 135.5022,
  },
  {
    location: "Kumamoto",
    latitude: 32.7897,
    longitude: 130.7417,
  },
  {
    location: "Saitama",
    latitude: 35.9081,
    longitude: 139.6566,
  },
  {
    location: "Nagasaki",
    latitude: 32.7447,
    longitude: 129.8736,
  },
  {
    location: "Hyogo",
    latitude: 35.0403,
    longitude: 134.826,
  },
  {
    location: "Shizuoka",
    latitude: 34.9769,
    longitude: 138.3831,
  },
  {
    location: "Kanagawa",
    latitude: 35.4175,
    longitude: 139.3389,
  },
  {
    location: "Nagano",
    latitude: 36.6514,
    longitude: 138.1811,
  },
  {
    location: "Okinawa",
    latitude: 26.3358,
    longitude: 127.8014,
  },
  {
    location: "Chiba",
    latitude: 35.6047,
    longitude: 140.1233,
  },
  {
    location: "Mie",
    latitude: 34.5212,
    longitude: 136.383,
  },
  {
    location: "Miyagi",
    latitude: 38.4494,
    longitude: 140.9262,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Yokohama",
    latitude: 35.4478,
    longitude: 139.6425,
  },
  {
    location: "Hokkaido",
    latitude: 43.0645,
    longitude: 141.3466,
  },
  {
    location: "Miyazaki",
    latitude: 31.9111,
    longitude: 131.4239,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}
export { getLocationByName, getLocations };
