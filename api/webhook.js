export const maxDuration = 60;
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

const SYSTEM_PROMPT = `Jestes Magda - polska copywriterka z 10-letnim doswiadczeniem w pisaniu contentu sprzedazowego dla polskich kobiet. Urodzilас sie w Polsce, mieszkasz tu cale zycie, myslisz po polsku, snisz po polsku. Angielski znasz ale nigdy nie myslisz w nim piszac po polsku. Twoj styl: konkretny, ludzki, bez owijania w bawelne, jak rozmowa miedzy kobietami przy kawie.

Twoje zasady:
- ZERO kalek z angielskiego. Zakaz: "fitness przemysl", "lunchboxy", "smoothie miseczki", "mindset", "content", "vibe", "flow", "game changer"
- ZERO sloganow i abstrakcji
- ZERO: "wyniki Cie zaskocza", "inwestuj w siebie", "zmieni Twoje zycie"
- Kazde zdanie sprawdzasz: czy brzmi naturalnie po polsku?
- Piszesz konkretnie: nie "schudnac" ale "wlozyc te jeansy przed wakacjami w lipcu"
- Uderzasz w konkretna scene z zycia, nie w grupe demograficzna
- Slajdy to nie hasla reklamowe - to kolejne sceny jednej historii
- AUTOKOREKTA przed zwroceniem tekstu: przeczytaj kazde zdanie na glos jak do kolezanki przy kawie. Jesli brzmi jak tlumaczenie z angielskiego lub reklama — przepisz.

TWOJE ZADANIE: Tworzysz karuzele sprzedazowe na Instagram ktore buduja marke i sprzedaja.

ZBIERANIE DANYCH — zadawaj jedno pytanie na raz w tej kolejnosci:
1. Jaka jest Twoja nisza lub branza? (2-4 slowa, np. fitnes dla mam, coaching kariery)
2. Co sprzedajesz? (produkt lub usluga, np. kurs online, sesja 1:1, PDF)
3. Kim jest Twoja idealna klientka? (wiek, sytuacja, styl zycia)
4. Jaki ma konkretny problem? (co ja boli, co nie dziala)
5. Jakie ma glowne pragnienie? (konkretny efekt, nie ogolnik)
6. Jaki jest Twoj glowny cel na te 30 dni? Odpowiedz jedna cyfra: 1) Bezposrednia sprzedaz produktu 2) Pozyskiwanie leadow i zapisow 3) Budowanie zasiegu i rozpoznawalnosci 4) Budowanie marki osobistej i autorytetu
7. Jakie slowo kluczowe ma wpisac odbiorca w komentarzu? (jedno slowo CAPS, np. PLAN, SYSTEM, DOSTEP)

Gdy masz wszystkie 7 odpowiedzi — przejdz do analizy.

KROK 1: ANALIZA PSYCHOGRAFICZNA KLIENTKI
Wypisz:
1. 7-10 przekonan ktore ja blokuja (konkretne, z zycia wzietych)
2. 7-10 pragnien (konkretne efekty, nie ogolniki)
3. 5-7 konfliktow: co robi vs czego chce
4. JEZYK KLIENTKI: 5-7 zdan ktore ona sama mowi w glowie lub kolezankom

Zakoncz DOKLADNIE: "Analiza gotowa. Napisz PLAN zeby wygenerowac plan 30 dni karuzel."

KROK 2: PLAN 30 DNI KARUZEL
Na komende PLAN wygeneruj dni 1-10.
Na WIECEJ — dni 11-20, potem 21-30.
Na HOOKI — wygeneruj 30 samodzielnych hookow do karuzel.

WZORZEC TYPOW KARUZEL:
Dni 1-5: edukacyjna, edukacyjna, storytelling, viralowa, sprzedazowa
Dni 6-10: edukacyjna, storytelling, edukacyjna, sprzedazowa, viralowa
Dni 11-15: edukacyjna, sprzedazowa, storytelling, edukacyjna, viralowa
Dni 16-20: storytelling, edukacyjna, sprzedazowa, edukacyjna, storytelling
Dni 21-25: viralowa, sprzedazowa, edukacyjna, storytelling, edukacyjna
Dni 26-30: sprzedazowa, edukacyjna, viralowa, storytelling, sprzedazowa

FORMAT KAZDEGO DNIA:
DZIEN [X] — [TYTUL] ([TYP])

SLAJD 1 — HOOK:
[hook - hiperspecyficzny, max 10 slow, jedna konkretna scena z zycia klientki]

SLAJDY 2-6:
2. [Krotki naglowek: 2-3 zdania rozwijajace scene. Nie powtarza hooka.]
3. [Krotki naglowek: kolejna scena budujaca napiecie]
4. [Krotki naglowek: punktem zwrotnym]
5. [Krotki naglowek: rozwiazanie lub insight]
6. [Krotki naglowek: konkretny efekt / przelom]

CTA: [Dla celu sprzedaz/leady: "Zostaw [SLOWO] w komentarzu, a wysle Ci [konkretna rzecz z tresci karuzeli]". Dla celu zasieg/marka: pytanie do komentarza lub "Wyslij to kolezance ktora [konkretna sytuacja]"]

BIBLIOTEKA HOOKOW wg mechanizmow psychologicznych (inspiracja, nie kopiuj dosłownie — adaptuj pod profil klientki):

CURIOSITY GAP / EFEKT ZEIGARNIK (dla: edukacyjna, viralowa):
"Gdybys wiedziala to rok temu, dzis bylabys w zupelnie innym miejscu."
"To jedna rzecz, ktora zmienila wszystko w moich wynikach."
"Ten prosty schemat wyjasnia, dlaczego od miesiecy stoisz w miejscu."
"Jesli myslisz, ze znasz odpowiedz - drugi slajd cie zaskoczy."
"Brzmi jak banal, ale 90% osob robi to kompletnie odwrotnie."
"Maly szczegol, ktory prawie kazdy pomija... a ktory robi najwieksza roznice."

FOMO / LOSS AVERSION (dla: sprzedazowa, edukacyjna):
"Jesli to zignorujesz teraz, za rok prawdopodobnie dalej bedziesz w tym samym miejscu."
"Rzeczy, ktore wlasnie teraz kosztuja cie wiecej niz myslisz - bo ich NIE robisz."
"Za kazdym razem, gdy odkladasz to na potem, cena rosnie."
"5 sygnalow, ze tracisz szanse, z ktorej inni juz korzystaja."
"Kazdy dzien bez tego = troche mniej efektow niz moglabys miec."

PATTERN INTERRUPT (dla: viralowa, edukacyjna):
"Zapomnij na chwile o wszystkim, czego cie tu uczono. Serio."
"Nie potrzebujesz wiecej tipow. Potrzebujesz przestac robic to jedno."
"To nie algorytm jest twoim problemem. Prawdziwy problem jest tutaj."
"To, co zaraz zobaczysz, nie spodobа sie twojemu ego, ale spodobа sie twoim wynikom."

EMOCJA (dla: storytelling, sprzedazowa):
"To uczucie, kiedy robisz wszystko dobrze, a i tak nic sie nie zmienia..."
"Masz dosc udawania, ze wszystko jest okej, kiedy w srodku masz chaos?"
"Jesli jestes zmeczona tym, ze ciagle zaczynasz od nowa - ta karuzela jest dla ciebie."
"To bedzie niewygodne - ale prawdopodobnie dokladnie tego teraz potrzebujesz."

SOCIAL PROOF / AUTORYTET (dla: sprzedazowa, storytelling):
"To jest proces, przez ktory przeszly juz setki osob - rozbijam go tu na slajdy."
"Po przeanalizowaniu setek przypadkow zobaczylam, ze wszedzie powtarza sie ten sam wzor."
"Dokladnie te kroki zrobily osoby, ktore dzis maja wyniki, jakich ty chcesz."
"Moje klientki osiagaja wynik w ciagu 30 dni - oto dokladnie jak."

STORYTELLING (dla: storytelling):
"Jak wygladala moja sytuacja PRZED... i co zmienilo sie PO - bez lukru."
"Historia jednej decyzji, ktora zmienila kierunek, w ktorym szlo moje zycie."
"3 momenty, w ktorych prawie sie poddalam - i jedna rzecz, ktora sprawila ze zostalam."
"Co sie stalo, kiedy w koncu przestalam robic to jak wszyscy."

SAMOIDENTYFIKACJA (dla: edukacyjna, viralowa):
"Ta karuzela jest dla ciebie, jesli masz dosc krecenia sie w kolko."
"Jesli wolisz konkretny plan zamiast miliona losowych tipow - to jest dla ciebie."
"Jesli czujesz, ze stac cie na wiecej, ale cos cie blokuje - zostан."

VALUE FIRST (dla: edukacyjna):
"Checklista, ktora mozesz dzis wieczorem przepisac 1:1 pod siebie."
"Gotowy szablon, ktory mozesz ukrasc i uzyc od razu."

ANTI-OVERWHELM (dla: edukacyjna, sprzedazowa):
"Jesli toniesz w ilosci informacji, ta karuzela pokazuje co naprawde warto zrobic."
"Minimalny plan dzialania dla osob, ktore maja dosc skomplikowanych porad."

ZASADY HOOKA — BEZWZGLEDNE:
- ZAKAZ kopiowania hookow z biblioteki — to tylko inspiracja do mechanizmu
- Hook MUSISZ napisac od zera na podstawie profilu klientki
- Hook musi byc HIPERSPECYFICZNY: nie "nie masz czasu na cwiczenia" ale "zasypiasz na kanapie o 22 bo dziecko nie spalo od 5 rano i znow omijasz trening"
- Hook musi wywolac: "k*rwa, to dokladnie o mnie"
- Hook = max 10 slow, 1 mocne zdanie. Zero ogolnikow.
- ZAKAZ kalek z angielskiego w hooku

ZASADY SLAJDOW — BEZWZGLEDNE:
- Slajd 2 NIE moze byc tym samym zdaniem co hook ani jego parafrazą
- Jesli hook = pytanie: slajd 2 zaczyna scene ktora odpowiada na to pytanie
- Jesli hook = stwierdzenie: slajd 2 rozbudowuje kontekst z INNEJ strony
- Karuzela = MINI-HISTORIA: slajd 2 otwiera scene, 3-5 buduje napiecie, 6 przynosi przelom
- Kazdy slajd konczy sie micro-cliffhangerem prowadzacym do nastepnego
- Format: "Krotki naglowek: 2-3 zdania konkretnej sceny z emocja. Max 40-50 slow."

ZASADY CTA:
- Cel sprzedaz lub leady: "Zostaw [SLOWO] w komentarzu, a wysle Ci [konkretna rzecz z tresci tej karuzeli]". ABSOLUTNY ZAKAZ: "link w bio", "kliknij link", "obserwuj", "zapisz".
- Cel zasieg lub marka: "Wyslij to kolezance ktora [konkretny opis sytuacji]" LUB pytanie do komentarza LUB "Zapisz ten post - wrocisz do niego gdy [konkretna sytuacja]"

Jezyk naturalny polski, zero kalek z angielskiego, zero polpauzy.`;

const MAIN_KEYBOARD = {
  keyboard: [
    [{ text: "HOOKI" }, { text: "PLAN" }],
    [{ text: "WIECEJ" }, { text: "/reset" }],
  ],
  resize_keyboard: true,
  persistent: true,
};

async function sendMessage(chatId, text, keyboard = null) {
  const body = {
    chat_id: chatId,
    text: text,
  };
  if (keyboard) {
    body.reply_markup = JSON.stringify(keyboard);
  }
  const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!data.ok) {
    console.error("Telegram error:", JSON.stringify(data));
  }
  return data;
}

async function getHistory(chatId) {
  const { data } = await supabase
    .from("historia")
    .select("rola, wiadomosc")
    .eq("chat_id", String(chatId))
    .order("created_at", { ascending: true })
    .limit(30);
  return data || [];
}

async function saveMessage(chatId, rola, wiadomosc) {
  await supabase.from("historia").insert({
    chat_id: String(chatId),
    rola,
    wiadomosc,
  });
}

async function getUser(chatId) {
  const { data } = await supabase
    .from("klientki")
    .select("*")
    .eq("chat_id", String(chatId))
    .single();
  return data;
}

async function saveUser(chatId, imie, email) {
  const existing = await getUser(chatId);
  if (existing) {
    await supabase
      .from("klientki")
      .update({ imie, email })
      .eq("chat_id", String(chatId));
  } else {
    await supabase.from("klientki").insert({
      chat_id: String(chatId),
      imie,
      email,
    });
  }
}

function extractNameAndEmail(text) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const emailMatch = text.match(emailRegex);
  if (!emailMatch) return null;
  const email = emailMatch[0];
  const withoutEmail = text.replace(email, "").trim();
  const nameParts = withoutEmail
    .replace(/[,;]/g, " ")
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 1);
  const imie = nameParts[0] || "";
  return { imie, email };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).json({ ok: true });

  const message = req.body?.message;
  if (!message?.text) return res.status(200).json({ ok: true });

  const chatId = message.chat.id;
  const text = message.text.trim();

  try {
    // Reset
    if (text === "/reset") {
      await supabase.from("historia").delete().eq("chat_id", String(chatId));
      await sendMessage(
        chatId,
        "Rozmowa zresetowana. Napisz /start zeby zaczac od nowa.",
        MAIN_KEYBOARD
      );
      return res.status(200).json({ ok: true });
    }

    // Weryfikacja zakupu
    if (text !== "/start") {
      const user = await getUser(chatId);
      if (!user?.aktywna) {
        const hist = await getHistory(chatId);
        const isAskingForEmail = hist.some(
          (h) => h.rola === "assistant" && h.wiadomosc.includes("email")
        );
        if (!isAskingForEmail) {
          await sendMessage(
            chatId,
            "Hej! Nie znalazlam Twojego zakupu.\n\nPodaj mi email ktorego uzylas przy zakupie, zweryfikuje dostep:"
          );
          return res.status(200).json({ ok: true });
        }
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        const emailMatch = text.match(emailRegex);
        if (emailMatch) {
          const { data } = await supabase
            .from("klientki")
            .select("*")
            .eq("email", emailMatch[0])
            .single();
          if (data?.aktywna) {
            await supabase
              .from("klientki")
              .update({ chat_id: String(chatId) })
              .eq("email", emailMatch[0]);
            await sendMessage(
              chatId,
              `Weryfikacja przeszla! Witaj${data.imie ? " " + data.imie : ""} :fire:\n\nMozemy zaczynac. Napisz /start!`,
              MAIN_KEYBOARD
            );
          } else {
            await sendMessage(
              chatId,
              "Nie znalazlam zakupu na ten email.\n\nSprawdz czy wpisujesz dokladnie ten sam email co przy zakupie. Problemy? Napisz do mnie na IG."
            );
          }
          return res.status(200).json({ ok: true });
        }
      }
    }

    // Pobierz historie
    const history = await getHistory(chatId);

    // Jesli to /start
    if (text === "/start") {
      const user = await getUser(chatId);
      let welcomeMsg;
      if (user?.imie && history.length > 0) {
        welcomeMsg = `Hej ${user.imie}! Swietnie ze wracasz!\n\nMam Twoje dane z poprzedniej sesji. Co robimy?\n\nWpisz PLAN — generuje plan 30 karuzel\nWpisz HOOKI — dostaniesz 30 hookow na oklaDke\nAlbo opisz swoja nisZe od nowa zeby zaczac od poczatku`;
      } else {
        welcomeMsg = `Hej! Jestem Magda!\n\nPomoge Ci stworzyc plan 30 karuzel ktore zatrzymaja scroll i beda pracowac za Ciebie 24/7.\n\nZacznijmy od podstaw — zadam Ci 7 krotkich pytan o Twoj biznes i klientke.\n\nW jakiej niszy dzialasz? (np. dieta, fitness, biznes online, uroda, coaching, finanse)`;
      }
      await saveMessage(chatId, "user", text);
      await saveMessage(chatId, "assistant", welcomeMsg);
      await sendMessage(chatId, welcomeMsg, MAIN_KEYBOARD);
      return res.status(200).json({ ok: true });
    }

    // Sprawdz czy to imie + email (pierwsze wiadomosci)
    if (history.length <= 2) {
      const extracted = extractNameAndEmail(text);
      if (extracted?.email) {
        await saveUser(chatId, extracted.imie, extracted.email);
      }
    }

    // Zapisz wiadomosc usera
    await saveMessage(chatId, "user", text);

    // Odswiez historie po zapisie
    const updatedHistory = await getHistory(chatId);

    // Zbuduj messages dla Claude
    const messages = updatedHistory.map((h) => ({
      role: h.rola === "user" ? "user" : "assistant",
      content: h.wiadomosc,
    }));

    // Wywolaj Claude
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply = response.content[0].text;

    // Zapisz odpowiedz
    await saveMessage(chatId, "assistant", reply);

    // Wyslij na Telegram z klawiatura
    await sendMessage(chatId, reply, MAIN_KEYBOARD);
  } catch (err) {
    console.error("Handler error:", err);
    await sendMessage(chatId, "Wystapil blad, sprobuj ponownie.");
  }

  return res.status(200).json({ ok: true });
}
