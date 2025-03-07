// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendList = [];

const addFriend = () => {
  let nameFriend = document.getElementById("friend");

  if (nameFriend.value) {
    friendList.push(nameFriend.value);
    renderFriendList();
    nameFriend.value = "";
  } else {
    alert("Ingresa el nombre de tus amigos.");
  }
};

const renderFriendList = () => {
  let ulFriends = document.querySelector(".name-list");
  ulFriends.innerHTML = "";

  friendList.map((friend) => {
    let liFriend = document.createElement("li");
    liFriend.innerHTML = friend;
    ulFriends.appendChild(liFriend);
  });
};

const drawNames = () => {
  if (friendList.length > 0) {
    const findDrawNames = Math.floor(Math.random() * friendList.length);

    let result = document.getElementById("result");
    result.innerHTML = friendList[findDrawNames];
  } else {
    alert("Ingresa el nombre de tus amigos.");
  }
};
