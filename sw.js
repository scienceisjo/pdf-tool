// 이 저장소는 class-tools/pdf-tool 로 이전됨. 남아있는 서비스워커/캐시를 정리하고 스스로 해제.
self.addEventListener("install", e=>self.skipWaiting());
self.addEventListener("activate", e=>{
  e.waitUntil((async ()=>{
    const ks = await caches.keys();
    await Promise.all(ks.map(k=>caches.delete(k)));
    await self.registration.unregister();
    const cs = await self.clients.matchAll();
    cs.forEach(c=>c.navigate(c.url));
  })());
});
