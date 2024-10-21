document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面内容
    initializeContent();

    // 添加导航事件监听器
    document.querySelector('.btn-register').addEventListener('click', () => showSection('register'));
    document.querySelector('.btn-login').addEventListener('click', () => showSection('login'));

    // 初始化时显示主页
    showSection('home');
});

function initializeContent() {
    renderActivities();
    renderCommunityPosts();
    renderRescueAnimals();
}

function showSection(sectionId) {
    // 隐藏所有部分
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    // 显示选定的部分
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        selectedSection.classList.add('active');
    }

    // 更新按钮状态
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.section-btn[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

function renderActivities() {
    const activities = [
        { name: "도시 공원 청소의 날", date: "2024-05-15", location: "중앙 공원", description: "공원을 청소하고 동물들을 위한 더 나은 환경을 만들어요!" },
        { name: "반려동물 입양의 날", date: "2024-06-01", location: "시민 광장", description: "유기동물들에게 따뜻한 가정을 찾아주세요." },
        { name: "야생동물 보호 강연", date: "2024-06-15", location: "시립 도서관", description: "야생동물 친구들을 어떻게 보호할 수 있는지 알아봐요." }
    ];

    const activityCards = document.getElementById('activity-cards');
    activities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerHTML = `
            <h3>${activity.name}</h3>
            <p>날짜: ${activity.date}</p>
            <p>장소: ${activity.location}</p>
            <p>${activity.description}</p>
            <button class="btn btn-primary">지금 신청하기</button>
        `;
        activityCards.appendChild(card);
    });
}

function renderCommunityPosts() {
    const posts = [
        { title: "집에서 부상당한 새를 돌보는 방법", author: "새 애호가", date: "2024-04-01", content: "최근 우리 집 뒷마당에서 부상당한 작은 새를 발견했어요..." },
        { title: "도시의 야생동물 보호", author: "도시 생태학자", date: "2024-04-05", content: "도시화가 진행됨에 따라 점점 더 많은 야생동물들이 생존의 위협을 받고 있습니다..." }
    ];

    const communityPosts = document.getElementById('community-posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'community-post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>작성자: ${post.author} | 게시일: ${post.date}</p>
            <p>${post.content.substring(0, 100)}...</p>
            <a href="#" onclick="showSection('forum'); return false;">자세히 보기</a>
        `;
        communityPosts.appendChild(postElement);
    });
}

function renderRescueAnimals() {
    const rescueAnimals = [
        { name: "꽃이", type: "고양이", story: "꽃이는 버려진 고양이로, 지금은 따뜻한 가정이 필요해요..." },
        { name: "황이", type: "개", story: "황이는 다친 유기견으로, 의료 지원과 사랑이 필요해요..." }
    ];

    const rescueSection = document.getElementById('rescue-animals');
    rescueAnimals.forEach(animal => {
        const animalElement = document.createElement('div');
        animalElement.className = 'rescue-animal';
        animalElement.innerHTML = `
            <h3>${animal.name}（${animal.type}）</h3>
            <p>${animal.story}</p>
            <button class="btn btn-secondary" onclick="showSection('rescue')">도움 주기</button>
        `;
        rescueSection.appendChild(animalElement);
    });
}
