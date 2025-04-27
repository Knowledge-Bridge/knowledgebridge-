// Dark mode toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Language change
function changeLanguage() {
    var lang = document.getElementById("language-switch").value;
    if (lang === "bn") {
        document.getElementById("mission").innerText = "আমাদের লক্ষ্য হল বিশ্বব্যাপী শিক্ষার্থীদের স্বপ্নকে বাস্তবে রূপান্তর করা।";
        document.getElementById("vision").innerText = "ভিশন: বিশ্বমানের শিক্ষা এবং নির্ভরযোগ্য পরামর্শের মাধ্যমে একটি সেতুবন্ধন তৈরি করা।";
        document.getElementById("register").innerText = "রেজিস্ট্রেশন করুন";
        document.getElementById("become-partner").innerText = "পার্টনার হন";
    } else {
        document.getElementById("mission").innerText = "Our mission is to bridge students' dreams into reality globally.";
        document.getElementById("vision").innerText = "Vision: Building a bridge with world-class education and trusted counseling.";
        document.getElementById("register").innerText = "Register Now";
        document.getElementById("become-partner").innerText = "Become a Partner";
    }
}
