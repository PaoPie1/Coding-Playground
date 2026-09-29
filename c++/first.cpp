#include <iostream>

int main ()
{
    int secret = 42;
    int guess;
    std::cout << "Guess the number!" << std::endl;
    std::cout << "Enter your guess: " << std::endl;
    std::cin >> guess;
    std::cout << "You guessed " << guess << std::endl;
    return 0;
}