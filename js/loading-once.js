document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading-screen");

  // ถ้าไม่ใช่หน้าแรก (ไม่มี loading-screen) → ไม่ทำอะไร
  if (!loading) return;

  // ถ้าเคยโหลดแล้วใน session นี้ → ลบทิ้งทันที
  if (sessionStorage.getItem("firstLoaded")) {
    loading.remove();
    return;
  }

  // ครั้งแรกจริง
  window.addEventListener("load", () => {
    loading.classList.add("fade-out");

    setTimeout(() => {
      loading.remove();
      sessionStorage.setItem("firstLoaded", "true");
    }, 800); // ตรงกับ transition 0.8s ของตาล
  });
});
