window.addEventListener("DOMContentLoaded", async function () {
    async function get(url) {
        const resp = await fetch(url);
        return resp.json();
    }

    // StackOverflow
    document.querySelectorAll(".stack-card").forEach(async function (el) {
        const userId = el.getAttribute("user-id");
        const response = await get(`https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`);
        const user = response.items[0];
        const { profile_image, website_url, link, display_name, reputation, user_id } = user;
        const { gold, silver, bronze } = user.badge_counts;

        el.innerHTML = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;">
                <div style="display: flex; align-items: center;">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${profile_image}" alt="Profile image">
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #000;">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="${website_url && link}">
                                ${display_name}
                            </a>
                        </span>
                        <span style="font-weight: 400; color: #586069;">
                            @${link.replace("https://", '').replace(`/users/${user_id}`, '')}
                        </span>
                    </div>
                </div>
                <div style="margin-top: 12px; display: flex; justify-content: space-evenly;">
                    <div>
                        <span style="font-size: 10px;">Reputation</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${reputation}
                        </div>
                    </div>
                    <div>
                        <span style="font-size: 10px;">Badges</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${Number(gold) + Number(silver) + Number(bronze)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // GitHub
    document.querySelectorAll(".github-card").forEach(async function (el) {
        const username = el.getAttribute("username");
        const response = await get(`https://api.github.com/users/${username}`);
        const { name, avatar_url, public_repos, followers, html_url, following } = response;

        el.innerHTML = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;">
                <div style="display: flex; align-items: center;">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${avatar_url}" alt="Profile image">
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #000;">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="${html_url}">
                                ${name}
                            </a>
                        </span>
                        <span style="font-weight: 400; color: #586069;">
                            @${html_url.replace('https://', '')}
                        </span>
                    </div>
                </div>
                <div style="margin-top: 12px; display: flex; justify-content: space-evenly;">
                    <div>
                        <span style="font-size: 10px;">Repositories</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${public_repos}
                        </div>
                    </div>
                    <div>
                        <span style="font-size: 10px;">Followers</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${followers}
                        </div>
                    </div>
                    <div>
                        <span style="font-size: 10px;">Following</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${following}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // Instagram
    document.querySelectorAll(".instagram-card").forEach(async function (el) {
        const username = el.getAttribute("username");
        const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Здесь нужно использовать ваш токен доступа
        const response = await get(`https://graph.instagram.com/${username}?fields=id,username,media_count,followers_count,follows_count,profile_picture_url&access_token=${accessToken}`);
        const { username: instaUsername, media_count, followers_count, follows_count, profile_picture_url } = response;

        el.innerHTML = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;">
                <div style="display: flex; align-items: center;">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${profile_picture_url}" alt="Profile image">
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #000;">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="https://www.instagram.com/${instaUsername}/">
                                ${instaUsername}
                            </a>
                        </span>
                    </div>
                </div>
                <div style="margin-top: 12px; display: flex; justify-content: space-evenly;">
                    <div>
                        <span style="font-size: 10px;">Media</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${media_count}
                        </div>
                    </div>
                    <div>
                        <span style="font-size: 10px;">Followers</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${followers_count}
                        </div>
                    </div>
                    <div>
                        <span style="font-size: 10px;">Following</span>
                        <div style="font-size: 32px; line-height: 1;">
                            ${follows_count}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // LinkedIn
    document.querySelectorAll(".linkedin-card").forEach(async function (el) {
        const username = el.getAttribute("username");
        const accessToken = 'YOUR_LINKEDIN_ACCESS_TOKEN'; // Здесь нужно использовать ваш токен доступа
        const response = await get(`https://api.linkedin.com/v2/me?oauth2_access_token=${accessToken}`);
        const { firstName, lastName, profilePicture, publicProfileUrl } = response;

        el.innerHTML = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;">
                <div style="display: flex; align-items: center;">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${profilePicture.displayImage~.elements[0].identifiers[0].identifier}" alt="Profile image">
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #000;">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="${publicProfileUrl}">
                                ${firstName.localized.en_US} ${lastName.localized.en_US}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
});
