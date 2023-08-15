// Fetching !!!

const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5a2cbc5ee2mshe4763c0a9bc328ep14065djsn63dc809cc860",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

async function fetchData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

// Anonym function, printing fetching data !!!
(async () => {
  try {
    const info = await fetchData(url);
    let myView = `
	${info
    .map(
      (e) => `
	<div class="group relative">
			<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    			<img src="${e.thumbnail}" alt="${e.title}" class="w-full sepia hover:sepia-0" />
			</div>
		<div class="mt-4 flex justify-between">
  			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute"></span>
					${e.title}
  			</h3>
		</div>
	</div>`
    )
    .join("")}
  `;
    content.innerHTML = myView;
  } catch (error) {
    console.log(error);
  }
})();

