var insertQuery = "";

console.log(descriptions)
for (f in files)
{
	var title = getTitle(files[f])
	insertQuery = `<div class='responsive'><div class='gallery'><a target='_blank' href='pictures/anaglyph/${files[f]}.jpg'><img src='pictures/jpeg/${files[f]}.JPG' loading="lazy" alt='${files[f]}' width="600" height="400"></a><div class='desc'>${title}</div></div></div>`;
	document.getElementById("galleryView").insertAdjacentHTML('afterend', insertQuery);

}

function getTitle(f)
{
	for (var i = 0; i < descriptions.length; i++)
	{
		console.log(descriptions[i])
		if (descriptions[i][0] == f)
		{
			return descriptions[i][1];
		}
	}
}
