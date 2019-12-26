var repository = [
  { name: "Bulbasaur", height: 0.7, type: "grass" },
  { name: "Ivysaur", height: 1, type: "grass" },
  { name: "Venusaur", height: 1, type: "grass" }
];

for (var i = 0; i < repository.length; i++){
  document.write("<p>" + repository[i].name + "</p>");
}

if (height > 0.7) {
  document.write('Wow, that is big!');
} else {
  document.write('That is tiny');
}

