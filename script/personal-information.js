let menu = document.querySelector(".bi-list");
let profileInfoDiv;
let profileInfoAdd = document.querySelector('.section-one');

function home() {
    window.location.href = "index.html"
}

menu.addEventListener('click', () => {

    if (!profileInfoDiv) {
        profileInfoDiv = document.createElement('div');
        profileInfoDiv.id = "profile-div";
        profileInfoDiv.style.width = "300px";
        profileInfoDiv.style.transition = 'width 2s';

        profileInfoDiv.innerHTML +=
            `
            <table>
                <thead>
                    <tr>
                        <th>Adiniz</th>
                        <td></td>
                    <tr>
                        <th>Emailin adi</th>
                        <td>${localStorage.getItem("inp-mail") || "melumat yoxdur"}</td>
                    </tr>
                    <tr>
                        <th>Emailin parolu :</th>
                        <td>${localStorage.getItem("inp-pass") || "melumat yoxdur"}</td>
                    </tr>
            </table>
        `

        profileInfoAdd.appendChild(profileInfoDiv);

    } else {

        if (profileInfoDiv) {
            profileInfoAdd.removeChild(profileInfoDiv);
            profileInfoDiv = null;
        }
    }
})