let friends = [
  {
    name: 'VRPill',
    update: 'Just vibing',
    level: 'trusted',
    status: 'online',
    in_world: {
      name: 'The Great Pug',
      totalFriends: 6,
    },
  },
  {
    name: 'Ruuubick',
    level: 'user',
    status: 'online',
    update: 'Today is tomorrow\'s yesterday',
    in_world: {
      name: 'Redd\'s Animation World',
      totalFriends: 1,
    },
  },
  {
    name: 'Ron',
    level: 'user',
    status: 'busy',
    in_world: null,
  },
  {
    name: 'Tupper',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'Summer Solitude',
      totalFriends: 3,
    },
  },
  {
    name: 'Aev',
    level: 'user',
    status: 'busy',
    in_world: null,
  },
  {
    name: 'Cubedparadox',
    level: 'user',
    status: 'dnd',
    update: 'testing stuff atm',
    in_world: null,
  },
  {
    name: 'Jesse',
    level: 'user',
    status: 'online',
    update: 'Stuck in the metaverse',
    in_world: {
      name: 'The room of the rain',
      totalFriends: 1,
    },
  },
  {
    name: 'Hackspanner',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'The Black Cat',
      totalFriends: 4,
    },
  },
  {
    name: 'Gunter',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'Cozy Apartment',
      totalFriends: 1,
    },
  },
  {
    name: 'gg67',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'Void Club',
      totalFriends: 6,
    },
  },
  {
    name: 'Q',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'Spirits of the Sea 海の幽霊',
      totalFriends: 1,
    },
  },
  {
    name: 'System',
    level: 'user',
    status: 'dnd',
    update: 'this is fine',
    in_world: null,
  },
  {
    name: 'Euan',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'Sala Pak Jai',
      totalFriends: 1,
    },
  },
  {
    name: 'MehStrongBadMeh',
    level: 'user',
    status: 'online',
    in_world: {
      name: 'The Great Pug',
      totalFriends: 3,
    },
  },
];

// Create a lot of friends via duplicates.
// const friendsCopy = [...friends];
// while (friends.length < 10) {
//   friends = friends.concat(friendsCopy);
// }

// Generate fake IDs and avatar pics.
friends.forEach((friend, index) => {
  friend.id = new Date().getTime() + index;
  if (!friend.avatarPic) friend.avatarPic = 'http://placeimg.com/640/360/any';
  if (friend.in_world) friend.in_world.id = new Date().getTime();
});

export default friends;