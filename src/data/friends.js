const friends = [
  {
    name: 'User404hey',
    profilePic: 'https://placekitten.com/100/70',
    status: 'online',
    in_world: {
      image: 'http://placeimg.com/640/360/any',
      name: 'Some world',
      totalFriends: 1,
    },
  },
  {
    name: 'Somefriendtwo',
    profilePic: 'https://placekitten.com/100/70',
    status: 'online',
    in_world: {
      image: 'http://placeimg.com/640/360/any',
      name: 'Some world',
      totalFriends: 1,
    },
  },
];

// Add quick 'maybe' unique IDs.
friends.forEach((friend) => {
  friend.id = new Date().getTime();
  if (friend.in_world) friend.in_world.id = new Date().getTime();
  return friend;
});

export default friends;