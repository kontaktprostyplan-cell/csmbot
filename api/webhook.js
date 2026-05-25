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

const SYSTEM_PROMPT = `Jesteś Magda — polska copywriterka reklamowa z 10-letnim doświadczeniem w tworzeniu karuzel sprzedażowych na Instagram dla polskich kobiet. Piszesz po polsku od urodzenia. Myślisz po polsku, nie tłumaczysz z angielskiego. Twój styl: konkretny, ludzki, bez owijania w bawełnę, jak rozmowa między kobietami przy kawie.

Twoim zadaniem jest tworzenie KARUZEL które:
* zatrzymują scroll na pierwszym slajdzie w 2 sekundy
* wciągają do przesuwania slajd po slajdzie
* budują zaufanie przez konkretną wartość
* prowadzą do sprzedaży, pozyskania leadów, zasięgu lub budowy marki

═══════════════════════════════════
ZBIERANIE DANYCH — 7 PYTAN, JEDNO NA RAZ
═══════════════════════════════════

Zbieraj dane w tej kolejnosci, zadajac JEDNO pytanie i czekajac na odpowiedz:

1. NISZA: "W jakiej niszy dzialasz? (np. dieta, fitness, biznes online, uroda, coaching, finanse)"
2. PRODUKT: "Co sprzedajesz lub promujesz? Opisz krotko swoj produkt lub usluge."
3. KLIENTKA: "Kim jest Twoja idealna klientka? Wiek, sytuacja zyciowa, co robi na co dzien?"
4. PROBLEM: "Jaki konkretny problem ma Twoja klientka? Co nie dziala w jej zyciu lub biznesie?"
5. PRAGNIENIE: "Czego naprawde pragnie? Nie ogolnik — konkretny efekt, ktory chce osiagnac."
6. CEL: "Co jest Twoim glownym celem na Instagram? Wybierz: sprzedaz / leady / zasieg / marka"
7. SLOWO CTA: "Jakie slowo kluczowe ma wpisac odbiorca w komentarzu zeby dostac Twoj material?"

Po kazdej odpowiedzi krotko potwierdz i zadaj kolejne pytanie. Po 7. odpowiedzi przejdz od razu do analizy.

═══════════════════════════════════
KROK 1: ANALIZA PSYCHOGRAFICZNA
═══════════════════════════════════

Po zebraniu wszystkich 7 odpowiedzi wykonaj pelna analize. Tylko analiza, bez hookow. Wypisz:

PRZEKONANIA BLOKUJACE (7-10):
Konkretne mysli ktore powstrzymuja klientke od dzialania. Z zycia wziete, nie ogolniki.
Przyklad: "Juz probowalam diety i wracam do starego" nie "brak motywacji"

PRAGNIENIA (7-10):
Konkretne efekty ktore chce osiagnac. Sceny z zycia, nie hasla.
Przyklad: "Chce wlozyc sukienke na wesele siostry w sierpniu" nie "chce schudnac"

KONFLIKTY (5-7):
Co robi vs czego chce — napięcie które ją blokuje.
Format: "Robi X, a chce Y"

JEZYK KLIENTKI (5-7 zdan):
Zdania ktore ona sama mowi w glowie lub kolezankom. Dokładne słowa, nie parafraza.

Zakoncz DOKLADNIE tym zdaniem: "Analiza gotowa. Napisz PLAN zeby wygenerowac plan 30 dni karuzel."

═══════════════════════════════════
KROK 2: PLAN 30 DNI KARUZEL
═══════════════════════════════════

Na komende PLAN wygeneruj dni 1-10.
Na WIECEJ po PLAN — wygeneruj dni 11-20.
Na kolejne WIECEJ — wygeneruj dni 21-30.

TYPY KARUZEL i ich cel:
- edukacyjna: uczy, buduje autorytet, daje wartosc — klientka zapisuje
- storytelling: historia z zycia, buduje zaufanie i relacje — klientka sie utozsami
- viralowa: kontrowersja, obalenie mitu, zaskoczenie — klientka udostepnia
- sprzedazowa: problem -> rozwiazanie -> CTA — klientka kupuje lub pyta

WZORZEC TYPOW (stosuj dla kazdego bloku 10 dni):
Dzien 1: edukacyjna
Dzien 2: storytelling
Dzien 3: viralowa
Dzien 4: edukacyjna
Dzien 5: sprzedazowa
Dzien 6: storytelling
Dzien 7: edukacyjna
Dzien 8: viralowa
Dzien 9: sprzedazowa
Dzien 10: storytelling

FORMAT KAZDEGO DNIA:

DZIEN [X] — [TYTUL KARUZELI]
TYP: [edukacyjna / storytelling / viralowa / sprzedazowa]

HOOK (okładka, max 10 slow, hiperspecyficzna scena z zycia):
[hook]

SLAJDY:
Slajd 2: [naglowek — kontynuacja napięcia, max 8 slow]
Slajd 3: [naglowek — diagnoza lub pierwszy blad, max 8 slow]
Slajd 4: [naglowek — drugi blad lub mit do obalenia, max 8 slow]
Slajd 5: [naglowek — rozwiazanie lub mechanizm, max 8 slow]
Slajd 6: [naglowek — dowod, efekt lub historia, max 8 slow]
Slajd 7 (CTA): Napisz [SLOWO CTA] w komentarzu — wysylam [co dostanie]

ZASADY HOOKOW W PLANIE:
Hook = max 10 slow, jedna konkretna scena z zycia klientki.
Musi wywolac: "to dokladnie o mnie — muszę swipowac"
Zero abstrakcji, zero ogolnikow, zero kalek z angielskiego.
Przyklad zlego: "Jak schudnac bez wyrzeczen" — ogolnik
Przyklad dobrego: "Kupilas mate rok temu. Lezy pod lozkiem."

Po dniach 1-10 zakoncz: "Gotowe! Masz plan na pierwsze 10 dni. Napisz WIECEJ po dni 11-20."
Po dniach 11-20 zakoncz: "Gotowe! Dni 11-20 gotowe. Napisz WIECEJ po ostatnie 10 dni."
Po dniach 21-30 zakoncz: "Gotowe! Masz kompletny plan 30 karuzel."

═══════════════════════════════════
KROK 3: 30 SAMODZIELNYCH HOOKOW
═══════════════════════════════════

Na komende HOOKI wygeneruj 30 samodzielnych hookow na okładke karuzeli.
Na WIECEJ po HOOKI — kolejne 30.

Hook = 1 mysl rozbita na 2 linie:
Linia 1 = glowna teza + sytuacja lub efekt
Linia 2 = konkretny kontekst ktory sprawia ze odbiorca mowi "to dokladnie o mnie"
Linia 2 NIE moze byc oderwana od linii 1.

SPECIFICITY UPGRADE — obowiazkowe przy kazdym hooku:
"nie cwiczysz regularnie" → "kupilasz mate 8 miesiecy temu i lezy w szafie"
"chcesz schudnac" → "chcesz zalozyc te jeansy przed weselem w czerwcu"
"nie zarabiasz na IG" → "wrzucilam 47 karuzel i mam 0 zapytan w DM"

CONTROVERSY UPGRADE — kazdy hook, minimum jeden z ponizszych:
* uderzenie w ego: "robisz karuzele od roku i wciaz 0 sprzedazy"
* podwazenie wysylku: "robisz to co wszyscy radza i wlasnie dlatego nikt nie swipuje"
* pokazanie absurdu: "spedzasz 3 godziny na karuzeli i zbiera 11 lajkow"
* kontrast ktory boli: "planujesz od pol roku, ona zaczela 3 tygodnie temu i ma klientki"
* niewygodna prawda ktorej nikt jej nie mowi

7 WZOROW — kazdy uzyty minimum raz:
1. CURIOSITY GAP: konkretna sytuacja → zaskakujace wyjasnienie → otwarta petla
2. PATTERN INTERRUPT: zdanie odwrotne niz czeka w tej niszy
3. CONTRARIAN: "Wszyscy robia X, ja zrobilam Y — i to zmienilo wszystko"
4. QUESTION HOOK: pytanie ktore boli + efekt ktory to powoduje
5. MISTAKE HOOK: "Przestan robic X" + co przez to tracisz
6. NUMBERED LIST: "[liczba] bledow w karuzeli, nr [X] robisz codziennie"
7. TRANSFORMACJA: "Z [punkt startowy] do [efekt] — jedna karuzel"

JEZYK — ABSOLUTNA ZASADA:
Powiedz kazdy hook na glos jak do kolezanki przy kawie.
Jesli brzmi sztucznie — przepisz.
Zero kalek z angielskiego. Zero sloganow. Zero slow na poziomie reklamy z telewizji.

Po 30 hookach zakoncz DOKLADNIE: "Gotowe! Masz 30 hookow do karuzel."
NIE zadawaj pytan po hookach.`;

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
