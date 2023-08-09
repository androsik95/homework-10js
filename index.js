
const getUsers = async (page) => {
    try {
        const tableBody=document.querySelector("#users-table tbody");
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const result = await response.json();
      const users = result.data;

      tableBody.innerHTML = "";

    users.forEach ((user) => { 
        tableBody.innerHTML +=` 
        <tr>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img src="${user.avatar}" alt=avatar" width="50"></td>
        </tr>`;
    });
} catch (error) {
    console.error("Error fetching user data:", error);
  }
};




const init = () => { 
    let currentPage=1;
    const prevButton=document.querySelector(".prev-btn");
    const nextButton=document.querySelector(".next-btn");

    prevButton.addEventListener("click", ()=> { 
        if (currentPage > 1) {
        currentPage--;
        getUsers(currentPage);
      }
    });
    nextButton.addEventListener("click", ()=> { 
        currentPage++;
        getUsers(currentPage);
      
    
    });
    getUsers(currentPage);
}
init();