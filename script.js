
const userProfile = {
    name: "Aruzhan",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Reading", "Music", "Gaming"]
};

function showProfile() {
    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("developerStatus").textContent = userProfile.isDeveloper;
    document.getElementById("profileAge").textContent = new Date().getFullYear() - userProfile.birthYear;
    document.getElementById("hobbyCount").textContent = userProfile.hobbies.length;
}

function showHobbies() {
    const hobbyList = document.getElementById("hobbyList");
    hobbyList.innerHTML = "";

    for (let hobby of userProfile.hobbies) {
        const item = document.createElement("li");
        item.textContent = hobby;
        hobbyList.appendChild(item);
    }
}

showProfile();
showHobbies();

document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const year = Number(document.getElementById("birthYear").value);

    if (year > new Date().getFullYear()) {
        alert("Birth year cannot be in the future.");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = year;

    showProfile();
});

document.getElementById("addButton").addEventListener("click", function() {
    const input = document.getElementById("newHobby");
    const hobby = input.value.trim();

    if (hobby === "") {
        document.getElementById("message").textContent = "Please enter a hobby.";
        return;
    }

    userProfile.hobbies.push(hobby);
    showHobbies();
    showProfile();

    input.value = "";
    document.getElementById("message").textContent = "Item added!";
});

document.getElementById("removeButton").addEventListener("click", function() {
    if (userProfile.hobbies.length > 0) {
        userProfile.hobbies.pop();
        showHobbies();
        showProfile();
        document.getElementById("message").textContent = "Last item removed!";
    } else {
        document.getElementById("message").textContent = "The list is empty.";
    }
});
