const today = new Date();

const options = { 
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric",
};

const formattedDate = today.toLocaleDateString('en-US', options); //month, day, year

const arr = ["current_date", "new_date", "todays_date", "date"]

for(let i = 0; i <= arr.length; i++) {
    const el = document.getElementById(arr[i]);
    el.innerHTML = formattedDate;
}






