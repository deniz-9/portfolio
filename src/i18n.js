import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      karanlik: "KARANLIK MOD",
      aydinlik: "AYDINLIK MOD",
      footerText: "Birlikte bir sonraki ürününüz üzerinde çalışalım.",
      navSkills: "Beceriler",
      navProjects: "Projeler",
      navContactMe: "İletişim",
      introTitle: "Yaratıcı düşünce minimalist sever",
      introText:
        "Merhaba, ben bir full-stack geliştiricisiyim. Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri oluşturacak bir Geliştirici arıyorsanız, Benimle el sıkışın",
      navContact: "İletişim",
      skillsTitle: "Beceriler",
      profileTitle: "Profil",
      birthday: "Doğum Tarihi",
      residence: "Yaşadığı Yer",
      preferredRole: "Tercih Ettiği Rol",
      frontendDeveloper: "Ön Uç Geliştirici",
      education: "Eğitim Durumu",
      aboutMe: "Hakkımda",
      aboutMeText:
        "Merhaba, ben Deniz. Bilişim sektöründe çalışmaktan ve bu alandaki yaratıcı projelerde yer almaktan büyük bir tutku ve heyecan duyuyorum. 1 yılı aşkın süredir bilişim sektöründe çalışıyorum ve bu süre zarfında işim gereği bulunduğum projeyi geliştirip uygulamaya koydum. Proje içeriğinde finans sektöründe kullanılan terimleri bir sözlük haline getirdim. Sözlüğü oluştururken HTML, CSS, Javascript ve Boostrap teknolojilerinden yararlandım. Aynı süreç içerisinde aldığım yazılım geliştirme eğitimi sayesinde birçok farklı teknolojiler hakkında bilgi edindim. Bulunduğum eğitim içerisinde Javascript, HTML, CSS, React.js gibi teknolojilerle projeler yaparak yeteneklerimi geliştirdim. Kendimi sürekli geliştirmeye ve yeni zorluklarla karşılaştığımda öğrenmeye açık olmam, her projede beni daha etkili ve verimli kılmasına yardımcı oldu. Vizyonum, yeteneklerimi profesyonel seviyeye çıkartarak bulunduğum sektörde kariyerimi başarıyla sürdürmektir. İşbirliği yapmaktan ve yeni projelerde yer almaktan heyecan duyuyorum. Lütfen benimle iletişime geçiniz.",
      javascriptText:
        "JavaScript, web tarayıcıları için geliştirilen ve genel amaçlı olarak kullanılan bir programlama dilidir. JavaScript, web sayfalarını interaktif hale getirmek, kullanıcı etkileşimi sağlamak, veri işlemek ve daha fazlasını yapmak için kullanılır.",
      reactText:
        "React, Facebook tarafından geliştirilen ve web uygulamaları oluşturmak için kullanılan bir JavaScript kütüphanesidir. React, kullanıcı arayüzlerini geliştirmek ve yönetmek için özellikle etkili ve verimli bir şekilde kullanılır.React, web geliştiricileri tarafından tercih edilen bir araçtır ve günümüzde birçok büyük web uygulamasında kullanılmaktadır. Öğrenmesi ve kullanması kolay olması, hızlı geliştirme ve verimli performans sağlaması nedeniyle popülerdir.",
      nodeJsText:
        "Node.js, sunucu tarafı uygulamalarını geliştirmek için kullanılan bir çalıştırma ortamıdır. JavaScript dilini kullanarak sunucu tarafı uygulamaları yazmanıza olanak tanır. Bu, aynı dilin hem istemci tarafında (tarayıcıda) hem de sunucu tarafında (sunucu üzerinde) kullanılabilmesini sağlar.",
      reduxText:
        "Redux, JavaScript uygulamaları için kullanılan bir durum yönetimi kütüphanesidir. Redux, özellikle React gibi kullanıcı arayüzü kütüphaneleriyle birlikte kullanılmak üzere tasarlanmıştır, ancak bağımsız olarak kullanılabilir. Redux, uygulama durumu karmaşıklığını azaltmak ve durum yönetimini etkili bir şekilde yapmak isteyen geliştiriciler için bir çözüm sunar. Bu, uygulama geliştirmeyi daha öngörülebilir ve yönetilebilir hale getirir.",
      // Python
      pythonText:
        "Python, web geliştirme, veri analizi, yapay zeka, otomasyon, bilimsel hesaplamalar ve daha birçok alanda kullanılan çok yönlü bir programlama dilidir. Bu nedenle, özellikle öğrenmeye yeni başlayanlar için popüler bir seçenektir.",
      // HTML
      htmlText:
        "HHTML (Hypertext Markup Language), web sayfalarının oluşturulmasını ve yapılandırılmasını sağlayan bir işaretleme dilidir. HTML, metin, bağlantılar, görseller, tablolar, formlar ve diğer öğeleri bir araya getirerek web sayfalarının içeriğini tanımlar. Web tarayıcıları, HTML belgelerini okuyarak bu belgelerde tanımlanan yapıya göre web sayfalarını düzenler ve görüntüler.",
      // CSS
      cssTitle: "CSS",
      cssText:
        "CSS (Cascading Style Sheets),  web sayfalarının görünümünü ve düzenini düzenlemek için kullanılan bir stil dilidir. CSS, HTML veya XML gibi işaretleme dilleriyle oluşturulan web sayfalarının tasarımını yönlendiren bir teknolojidir.",
      projectsTitle: "Projeler",
      viewSite: "Siteye Git",
      pizzaTitle: "Pizza Sipariş",
      moviesTitle: "Film Arama",
      jokesTitle: "Rastgele Şakalar",
      shoppingTitle: "Alışveriş Sepeti",
      calculatorTitle: "Hesap Makinesi",
      watchListTitle: " Film Listesi",
      pizzaText:
        " React kullanılarak geliştirilen bu etkileşimli web sayfası, Axios, Router, Cypress ve Yup gibi temel araçları barındırıyor. Uygulama istediğiniz pizzayı seçip sipariş vermenizi sağlamaktadır.",
      moviesText:
        "Redux Film Projesi, React ve React Router ile oluşturulmuş bir uygulamadır. Uygulamaya yeni filmler ekleyebilir, favorileri görüntüleyebilir veya silebilirsiniz.",
      jokesText:
        "Rastgele Şakalar projesi, bir API'den alınan şaka verileri ile oluşturulmuş eğlenceli ve gülümseten bir uygulamadır. Uygulamada redux ve react-toastify kullanılmıştır.",
      shoppingText:
        "Alışveriş Sepeti Uygulaması, React ve React Router ile geliştirilen dinamik bir web uygulamasıdır. Uygulamada ürünleri inceleyebilir ve sepete koyabilirsiniz.",
      calculatorText:
        "Hesap Makinesi uygulaması, React'in useReducer hook'u kullanılarak oluşturulan bir hesap makinesi uygulamasıdır. Basit matematiksel işlemler yapılabilmesini sağlar.",
      watchListText:
        "Film Listesi uygulaması bir dizi filmi görüntüler. Bu  filmleri kendi listenize koyabilirsiniz.Uygulama redux ile oluşturulmuştur.",
    },
  },

  en: {
    translation: {
      karanlik: "DARK MODE",
      aydinlik: "LIGHT MODE",
      footerText: "Let’s work together on your next product.",
      navSkills: "Skills",
      navProjects: "Projects",
      navContactMe: "Contact!",
      introTitle: "Creative thinker  Minimalism lover",
      introText:
        "Hi, I am a full-stack developer. If you are looking for a Developer to build robust and scalable front-end products with great user experiences, shake hands with me",
      navContact: "Contact",
      profileTitle: "Profile",
      birthday: "Birthday",
      residence: "Residence",
      preferredRole: "Preferred Role",
      frontendDeveloper: "Frontend Developer",
      education: "Education",
      skillsTitle: "Skills",
      aboutMe: "About Me",
      aboutMeText:
        "Hello, I am Deniz. I have been working in the IT industry for more than 1 year and during this time, I developed and implemented the project I was involved in as part of my job. In the project content, I created a glossary of terms used in the finance industry. While creating the glossary, I used HTML, CSS, Javascript and Boostrap technologies. Thanks to the software development training I received in the same process, I learned about many different technologies. I improved my skills by making projects with technologies such as Javascript, HTML, CSS, React.js. Being open to continuous self-improvement and learning when faced with new challenges helped me to make me more effective and efficient in every project. My vision is to continue my career successfully in the industry by increasing my skills to a professional level. I am excited to collaborate and take part in new projects. Please contact me.",
      javascriptText:
        "JavaScript is a general-purpose programming language developed for web browsers. JavaScript is used to make web pages interactive, provide user interaction, manipulate data and more.",
      reactText:
        "React is a JavaScript library developed by Facebook and used to build web applications. React is used particularly effectively and efficiently for developing and managing user interfaces. React is the tool of choice for web developers and is used in many major web applications today. It is popular because it is easy to learn and use, providing fast development and efficient performance.",
      nodeJsText:
        "Node.js is an execution environment for developing server-side applications. It allows you to write server-side applications using the JavaScript language. This allows the same language to be used both client-side (in the browser) and server-side (on the server).",
      reduxText:
        "Redux is a state management library for JavaScript applications. Redux is specifically designed for use with user interface libraries such as React, but can be used independently. Redux provides a solution for developers who want to reduce application state complexity and do state management effectively. This makes application development more predictable and manageable.",
      // Python
      pythonText:
        "Python is a versatile programming language used in web development, data analysis, artificial intelligence, automation, scientific calculations and many more. For this reason, it is a popular choice, especially for beginners.",
      // HTML
      htmlText:
        "HTML (Hypertext Markup Language) is a markup language for creating and structuring web pages. HTML defines the content of web pages by combining text, links, images, tables, forms and other elements. Web browsers read HTML documents and organize and display web pages according to the structure defined in these documents.",
      // CSS
      cssText:
        "CSS (Cascading Style Sheets) is a style language used to organize the appearance and layout of web pages. CSS is a technology that guides the design of web pages created with markup languages such as HTML or XML.",
      projectsTitle: "Projects",
      viewSite: "View Site",
      pizzaTitle: "Pizza Order",
      moviesTitle: "Movie Search",
      jokesTitle: "Random Jokes",
      shoppingTitle: "Shopping Cart",
      calculatorTitle: "Calculator",
      watchListTitle: "Film List",
      pizzaText:
        "Developed using React, this interactive web page includes basic tools such as Axios, Router, Cypress and Yup. The application allows you to select and order the pizza you want.",
      moviesText:
        "Redux Movie Project is an application built with React and React Router. You can add new movies to the app, view or delete favorites.",
      jokesText:
        "Random Jokes project is a fun and smile-inducing application built with joke data from an API. The application uses redux and react-toastify.",
      shoppingText:
        "Shopping Cart Application is a dynamic web application developed with React and React Router. In the application, you can review the products and put them in the cart.",
      calculatorText:
        "Calculator application is a calculator application created using React's useReducer hook. It enables simple mathematical operations.",
      watchListText:
        "Movie List application displays a series of movies. You can put these movies in your own list.The application is built with redux.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
