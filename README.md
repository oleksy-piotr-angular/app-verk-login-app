<h1>AppVerkLoginApp</h1>

<h2>Lista spełnionych wymagań:</h1>
<ul>
  <li>
    Stworzenie strony logowania wraz z formularzem zawierającym pola: e-mail,
    hasło.
  </li>
  <li>Dodanie walidacji formularza (wszystkie pola są wymagane).</li>
  <li>
    Zaimplementowanie autorskiego walidatora sprawdzającego pattern adresu e-mail (nie
    użyto natywnego walidatora).
  </li>
  <li>
    Dla pól formularza przygotowano autorski komponent kontrolki tekstowej, który w
    przypadku niepoprawnego wypełnienia formularza, wyświetli komunikaty o
    błędzie pod odpowiednią kontrolką.
  </li>
  <li>
    Po udanym zatwierdzeniu formularza, zasymulowano udane logowanie
    użytkownika zapisując w local storage token użytkownika (na potrzeby
    zadania wygenerowano randomowy JWT) a następnie przekierowano
    użytkownika na stronę główną.
  </li>
  <li>
    Zabezpieczono stronę logowania oraz stronę główną aby:
    <ul>
      <li>użytkownik zalogowany nie miał dostępu do strony logowania</li>
      <li>użytkownik niezalogowany nie miał dostępu do strony głównej</li>
    <ul>
  </li>
  <li>
    Po udanym logowaniu i przejściu do strony głównej pobiera się z API i wyświetla
    dane zalogowanego użytkownika (Tutejszym API jest plik JSON umieszczony w
    katalogu assets).
  </li>
</ul>
