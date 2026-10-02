// مصفوفة الـ 24 موقع مع أسماء الصور الحقيقية التي قمت بحفظها
const projects = [
    { title: "موقع الشركة الأساسي(Deltshow-web)", desc: "الواجهة الرسمية لتعريف خدمات DeltaShow الهندسية والبرمجية والتصوير.", url: "https://blackmahmoud6406.github.io/DeltaShow-up-/", thumb: "images/main web.png" },
    { title: "قطاعات وأنظمة الـ UPVC", desc: "أنظمة الأبواب والشبابيك العازلة وتفاصيل التصنيع والتركيب الهندسي.", url: "https://deltashow.github.io/Abo-Rabiea-/", thumb: "images/upvc web .png" },
    { title: "(Portfoilo-web) ملف الأعمال والتعريف الشامل", desc: "معرض أعمال رقمي تفاعلي يوثق إنجازات وتخصصات الشركة (Google Sites).", url: "https://sites.google.com/view/ds26-portfolio/home", thumb: "images/ds26-portfolio.png" },
    { title: "(medical-clinic-web)نظام إدارة العيادات الطبية", desc: "إدارة المواعيد، حجوزات المرضى، والسجلات الطبية للعيادات والمراكز.", url: "https://deltashow.github.io/medical-clinic/", thumb: "images/medical-clinic.png" },
    { title: "(store-platform-web) منصة المتاجر الإلكترونية", desc: "متجر رقمي متكامل لعرض المنتجات وإدارة عمليات البيع أوتوماتيكياً.", url: "https://deltashow.github.io/store-platform/", thumb: "images/store-platform.png" },
    { title: "(finishing-catalog-web) كتالوج التشطيبات", desc: "عرض وتصفح باقات وخيارات تشطيب الوحدات السكنية والأسعار.", url: "https://deltashow.github.io/finishing-catalog/", thumb: "images/finishing-catalog.png" },
    { title: "(property-auction-web) مزاد العقارات", desc: "منصة لإدارة وعرض المزادات العقارية وتقديم المزايدات المباشرة.", url: "https://deltashow.github.io/property-auction/", thumb: "images/property-auction.png" },
    { title: "(referral-system-web) نظام الإحالة", desc: "تتبع وإدارة ترشيحات العملاء والمكافآت الخاصة بالمسوقين والوسطاء.", url: "https://deltashow.github.io/referral-system/", thumb: "images/referral-system.png" },
    { title: "(site-visit-web) حجز المعاينات", desc: "صفحة مخصصة للعملاء لحجز مواعيد زيارة المواقع والمعارض بكل سهولة.", url: "https://deltashow.github.io/site-visit/", thumb: "images/site-visit.png" },
    { title: "(property-compare-web) مقارنة العقارات", desc: "أداة ذكية لمقارنة المواصفات، المساحات، والأسعار بين الوحدات.", url: "https://deltashow.github.io/property-compare/", thumb: "images/property-compare.png" },
    { title: "(digital-archive-web) الأرشيف الرقمي", desc: "نظام لتخزين وتنظيم المستندات والعقود والملفات الهندسية.", url: "https://deltashow.github.io/digital-archive/", thumb: "images/digital-archive.png" },
    { title: "(commercial-quote-web) عروض الأسعار التجارية", desc: "أداة لإنشاء وتوليد عروض الأسعار المخصصة للوحدات واللوحات بدقة.", url: "https://deltashow.github.io/commercial-quote/", thumb: "images/commercial-quote.png" },
    { title: "(property-swapping-web) استبدال العقارات", desc: "منصة تتيح للعملاء عرض عقاراتهم للبدل أو التبادل المتوافق.", url: "https://deltashow.github.io/property-swapping/", thumb: "images/property-swapping.png" },
    { title: "(ai-matchmaker-web) المطابق الذكي (AI Matchmaker)", desc: "نظام لربط طلبات العملاء بالوحدة العقارية الأنسب لاحتياجاتهم أوتوماتيكياً.", url: "https://deltashow.github.io/ai-matchmaker/", thumb: "images/ai-matchmaker.png" },
    { title: "(installment-tracker-web) متابع الأقساط", desc: "لوحة لمتابعة الجدول الزمني للأقساط والمبالغ المدفوعة والمستحقات.", url: "https://deltashow.github.io/installment-tracker/", thumb: "images/installment-tracker.png" },
    { title: "(schedule-call-web) جدولة المكالمات", desc: "أداة حجز مواعيد الاتصال والمتابعة الهاتفية مع فريق المبيعات.", url: "https://deltashow.github.io/schedule-call/", thumb: "images/schedule-call.png" },
    { title: "(digital-profile-web)الملف الشخصي الرقمي", desc: "كارت أعمال رقمي تفاعلي يجمع بيانات التواصل والروابط المهنية.", url: "https://deltashow.github.io/digital-profile/", thumb: "images/digital-profile.png" },
    { title: "(sales-crm-web) إدارة علاقات العملاء (Sales CRM)", desc: "نظام لمتابعة العملاء المحتملين ومراحل البيع والتواصل.", url: "https://deltashow.github.io/sales-crm/", thumb: "images/sales-crm.png" },
    { title: "(regional-map-web) الخريطة الإقليمية", desc: "خريطة تفاعلية توضح مواقع المشروعات والمناطق الحيوية والخدمات.", url: "https://deltashow.github.io/regional-map/", thumb: "images/regional-map.png" },
    { title: "إطلاق الحدث (event-launch2)", desc: "صفحة هبوط تسويقية ثانية مخصصة للإعلان عن فعالية أو مشروع.", url: "https://deltashow.github.io/event-launch2/", thumb: "images/event-launch2.png" },
    { title: "إطلاق الحدث (event-launch)", desc: "صفحة ترويجية للعد التنازلي والتسجيل لحضور إطلاق مشروع عقاري.", url: "https://deltashow.github.io/event-launch/", thumb: "images/event-launch.png" },
    { title: "(landing-page-web)صفحة الهبوط العامة", desc: "صفحة هبوط تسويقية لجمع البيانات وعرض تفاصيل الخدمة والمنتج.", url: "https://deltashow.github.io/landing-page/", thumb: "images/landing-page.png" },
    { title: "حاسبة التقييم(valuation-calculator-web)", desc: "أداة تقديرية لحساب القيمة السوقية للوحدات بناءً على المساحة.", url: "https://deltashow.github.io/valuation-calculator/", thumb: "images/valuation-calculator.png" },
    { title: "مستكشف الوحدات (Unit Finder)", desc: "أداة تفاعلية للفلترة والبحث عن الوحدة المناسبة (المساحة، السعر).", url: "https://deltashow.github.io/unit-finder/", thumb: "images/unit-finder.png" },
    { title: "إدارة العقارات (Property Management)", desc: "نظام لإدارة الوحدات، متابعة الصيانة، والتحصيلات والمستأجرين.", url: "https://deltashow.github.io/property-management/", thumb: "images/property-management.png" }
];

const itemsPerPage = 6; // عدد المشروعات في كل صفحة لضمان كبر حجم الكروت وراحتها
let currentPage = 1;

const linksContainer = document.getElementById('linksContainer');
const paginationContainer = document.getElementById('paginationContainer');

function displayProjects(page) {
    linksContainer.innerHTML = "";
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = projects.slice(start, end);

    paginatedItems.forEach(project => {
        const card = document.createElement('a');
        card.href = project.url;
        card.className = 'link-card';
        card.target = '_blank';

        card.innerHTML = `
            <img src="${project.thumb}" alt="${project.title}" class="card-thumb" onerror="this.src='logo.png'">
            <div class="card-content">
                <h3>${project.title} <span>🔗</span></h3>
                <p>${project.desc}</p>
            </div>
        `;
        linksContainer.appendChild(card);
    });

    setupPagination();
}

function setupPagination() {
    paginationContainer.innerHTML = "";
    const pageCount = Math.ceil(projects.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            displayProjects(currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        paginationContainer.appendChild(btn);
    }
}

displayProjects(currentPage);