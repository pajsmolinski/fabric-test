
### Informacje na temat wykorzystanych frameworków

- React > 16.12
- Fabric > 3.5

### Uruchomienie projektu

1. npm install
2. npm run start
3. [http://localhost:3000](http://localhost:3000).

## Zadania:

### 1. własna implementacja obramowania aktywnego obiektu
**Cel: Zmodyfikuj kod w taki sposób aby po zaznaczeniu elementu obramowanie zmieniło się z domyślnego (A) w następujące (B):**

![](http://nullgravity.eu/github/test_custom_border.png)

obrazek B ma na celu tylko zaprezentowanie ostatecznego wyniku, nie należy sugerowac się proporcjami.

**wymagania:**
1. padding 
- obramowania 10 px od obiektu,
- ikony na krańcach 10 px od obramowania,
2. ikony:
- ikona akcji 'rotate' - kółko
- ikona akcji 'resize' - trójkąt wskazujący kierunek resize
3. pozycjonowanie ikon akcji.
- left-top - obracanie obramowanego obiektu zgodnie z ruchem myszki
- right-top - skalowanie obramowanego obiektu (jednocześnie w X i Y) zgodnie z ruchem myszki
- left-bottom - skalowanie obramowanego obiektu (jednocześnie w X i Y) zgodnie z ruchem myszki
- right-bottom - obracanie obramowanego obiektu zgodnie z ruchem myszki
4. domyślne kontrolka dla akcji 'rotate' jest wyłączona,
5. domyślne kontrolki dla wszystkich akcji medium są wyłączone
