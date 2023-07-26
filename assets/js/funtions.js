// LS set data

const sendDataLs = (key, value)=>{
    localStorage.setItem(key, JSON.stringify(value));
};
const getDataLs = (key)=>{
   
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return[];
};


// time ago funtions

const timeAgo = (postDate) =>{
    const currentDate = new Date();
    const postDateTime = new Date(postDate);
  
    const timeDifference = currentDate.getTime() - postDateTime.getTime();
    const seconds = Math.floor(timeDifference / 1000);
  
    if (seconds < 60) {
      return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
    }
  
    const minutes = Math.floor(timeDifference / (1000 * 60));
    if (minutes < 60) {
      return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
    }
  
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hours < 24) {
      return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (days < 30) {
      return days === 1 ? `${days} day ago` : `${days} days ago`;
    }
  
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    if (months < 12) {
      return months === 1 ? `${months} month ago` : `${months} months ago`;
    }
  
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    return years === 1 ? `${years} year ago` : `${years} years ago`;
  }
  