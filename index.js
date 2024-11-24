// your code goes here ...
document.addEventListener("DOMContentLoaded", function () {
  var household = [];
  var form = document.querySelector("form");
  var householdList = document.querySelector(".household");
  var debugElement = document.querySelector(".debug");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    displayDebug();
  });

  form.querySelector(".info").addEventListener("click", function (event) {
    event.preventDefault();
    addPerson();
  });

  function addPerson() {
    var ageInput = form.querySelector("#age");
    var relationshipSelect = form.querySelector("#rel");
    var smokerCheckbox = form.querySelector("#smoker");

    var age = ageInput.value.trim();
    var relationship = relationshipSelect.value;
    var relationshipText =
      relationshipSelect.options[relationshipSelect.selectedIndex].text;
    var smoker = smokerCheckbox.checked;

    if (!isValidAge(age)) {
      alert("Please enter a valid age greater than 0.");
      return;
    }

    if (!isValidRelationship(relationship)) {
      alert("Please select a valid relationship.");
      return;
    }

    var person = {
      age: parseInt(age, 10),
      relationship,
      relationshipText,
      smoker,
    };

    household.push(person);
    updateHouseholdList();
    resetForm();
  }

  function isValidAge(age) {
    return age && !isNaN(age) && parseInt(age, 10) > 0;
  }

  function isValidRelationship(relationship) {
    return relationship !== "";
  }
  function updateHouseholdList() {
    householdList.innerHTML = "";

    household.forEach(function (person, index) {
      var listItem = document.createElement("li");
      listItem.className = "box";

      var media = document.createElement("article");
      media.className = "media";

      var mediaContent = document.createElement("div");
      mediaContent.className = "media-content";

      var ageInfo = document.createElement("p");
      ageInfo.innerHTML = `<strong style="font-size: 1.5em;">${person.relationshipText}</strong>`;

      var detailsInfo = document.createElement("p");
      var smokerSymbol = person.smoker ? "✓" : "✗";
      detailsInfo.innerHTML = `<strong>Age:</strong> ${person.age}, <strong>Smoker:</strong> ${smokerSymbol}`;

      var mediaRight = document.createElement("div");
      mediaRight.className = "media-right";

      var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "button is-danger is-small";

      mediaContent.appendChild(ageInfo);
      mediaContent.appendChild(detailsInfo);

      mediaRight.appendChild(removeButton);

      removeButton.addEventListener("click", function () {
        removePerson(index);
      });

      media.appendChild(mediaContent);
      media.appendChild(mediaRight);

      listItem.appendChild(media);

      householdList.appendChild(listItem);
    });
  }

  function removePerson(index) {
    household.splice(index, 1);
    updateHouseholdList();
  }

  function resetForm() {
    form.reset();
  }

  function displayDebug() {
    debugElement.textContent = JSON.stringify(household, null, 2);
    debugElement.style.display = "block";
  }
});
