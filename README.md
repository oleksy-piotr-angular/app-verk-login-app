<h1>AppVerkLoginApp</h1>

<h2>Lista spełnionych wymagań:</h1>
<ul>
  <li>
    Użyto SCSS do opisywania styli
  </li>
  <li>
    Utrzymanie spójności typowania zmiennych
  </li>
  <li>
    Utrzymanie spójności modyfikatorów dostępu
  </li>
  <li>
    Na potrzeby blokowania dostępu niezalogowanego użytkownika utworzono Guarda.
  </li>
   <li>
    Zastosowano czytelny podział zorganizowania projektu i podzielono na katalogi:
    <ul>
    <li>
      components
    </li>
    <li>
      dto
    </li>
    <li>
      guards
    </li>
    <li>
      mappers
    </li>
    <li>
      models
    </li>
    <li>
      pages
    </li>
    <li>
      services
    </li>
    <li>
      shared/validators
    </li>
    </ul>
  </li>
  <li>
      implementacja lazy-loading w poprawnej nawigacji
  </li>
  <li>
      Wykorzystano modele i DTO oraz dodano statyczną metodę do mapowania danych otrzymywanych w odpowiedziach z API
  </li>
  <li>
      Utworzono komponent kontrolki pola tekstowego z wykorzystaniem interfejsu ControlValueAccessor 
  </li>
  <li>
    Stworzenie strony logowania wraz z formularzem zawierającym pola: e-mail,
    hasło.
  </li>
  <li>
    Walidacja jest realizowana przez Customowy Validator dołączany podczas dynamicznego procesu budowania formularza
  </li>
  <li>
    W przypadku błędu wyświetlany jest komponent error-message-control pod odpowiednim inputem, którego dotyczy błąd, do którego przekazywany jest AbstractControl formularza i w którym rozpatrywane są odpowiednie błędy przewidziane podczas Walidacji Formularza
  </li>
  <li>
    Występuje autorska implementacja styli dla komponentów: wykorzystano responsywne kontenery i właściwości "display: flex"
  </li>
  <li>
    Pliki czcionek zostały umieszczone lokalnie w projekcie:czcionka została zmieniona. Czcionka "Roboto" została pobrana z Google Fonts. Reguła "font-face" został zdefiniowany jako "Roboto". Właściwość "font-family" dla Root'a(html, body) została zdefiniowana jako "Roboto".
  </li>
  <li>
   Commity są czytelne i napisane w języku angielskim - tak
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
    </ul>
  </li>
  <li>
    Po udanym logowaniu i przejściu do strony głównej pobiera się z API i wyświetla
    dane zalogowanego użytkownika (Tutejszym API jest plik JSON umieszczony w
    katalogu assets).
  </li>
</ul>
