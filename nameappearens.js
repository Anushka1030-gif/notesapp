const users=[
    {
        name:"Amisha rathore",
        pic:"https://images.unsplash.com/photo-1769844096355-6ff951291a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbGVudCUyMGNoYW9zJTIwaW4lMjBhJTIwbG91ZCUyMHdvcmxkJTIwJTdDbm90JTIwZm9yJTIwZXZlcnlvbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
        bio:"solent chaos in a loud world |not for everyone",
    },
    {
        name:"Amita Mehta",
        pic:"https://images.unsplash.com/photo-1645231881968-9c98338ee28d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFpbiUyMGNoYXJhY3RlciUyMGVuZXJneSUyMCU3QyUyMGNvZmZlZSUzRSUyMGV2ZXJ5dGhpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
        bio:"main character energy | coffee> everything",
    },
    {
        name:"Isha Oberoi",
        pic:"https://images.unsplash.com/photo-1606847923720-8d6eef3839ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Fsa2luZyUyMHRocm91Z2glMjBkcmVhbXMlMjBpbiUyMGRvYyUyMG1hcnRlbnMlN0MlMjBsYXRlJTIwbmlnaHQlMjB0aGlua2VyJTIwcGVyc29ufGVufDB8fDB8fHww",
        bio:"walking through dreams in doc martens| late night thinker",   
    },
    {
        name:"Ojin Oklawa",
        pic:"https://images.unsplash.com/photo-1657165746521-a544241777a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9vJTIwZ2xhbSUyMHRvJTIwZ2l2ZSUyMGElMjBkYW1uJTdDZmlsdGVyJTIwZnJlZSUyMHNvdWwlMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
        bio:"too glam to give a damn|filter free soul",
    },
    {
        name:"Diya Bansal",
        pic:"https://images.unsplash.com/photo-1757947900922-aee8ee4cc805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGElMjBsaXR0bGUlMjBjaGFvcyUyQ2ElMjBsb3QlMjBvZiUyMGFydCUyMGp1c3QlMjB2aWJlcyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        bio:"a little chaos,a lot of art|just vibes", 
    },
    {
        name:"Tanay Rawat",
        pic:"https://plus.unsplash.com/premium_photo-1739881008843-9ee28c67a85b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9uJ3QlMjB0ZXh0JTJDanVzdCUyMHZpYmUlN0MlMjBzb2Z0JTIwaGVhcnQlMkNzaGFycCUyMG1pbmQlMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
        bio:"don't text,just vibe| soft heart,sharp mind",
    },
    {
        name:"Mohit Chhabra",
        pic:"https://images.unsplash.com/photo-1630841277851-b7eabdef2411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWVzdGhldGljJTIwb3ZlcmxvYWQlN0MlMjBsaXZpbmclMjBpbiUyMGxvd2VyY2FzZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        bio:"aesthetic overload| living in lowercase",
    }
];


function showUsers(arr){
    // Create main card div
    arr.forEach(function(users){
    const card = document.createElement("div");
    card.classList.add("card");

// Create image
    const img = document.createElement("img");
    img.src=users.pic;
    img.classList.add("bg-img");

// Create blurred layer
    const blurLayer = document.createElement("div");
    blurLayer.style.backgroundImage=`url(${users.pic})`;
    blurLayer.classList.add("blurred-layer");

// Create content div
    const content = document.createElement("div");
    content.classList.add("content");

// Create heading
    const heading = document.createElement("h3");
    heading.textContent = users.name;

// Create paragraph
    const para = document.createElement("p");
    para.textContent =users.bio;

// Append elements
    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurLayer);
    card.appendChild(content);

// Finally append card to body (or any container)
    document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp=document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newusers=users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });
    document.querySelector(".cards").innerHTML="";
    showUsers(newusers);
});