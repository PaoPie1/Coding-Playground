#include <iostream>

int main ()
{
    int secret = 42;
    int guess;
    std::cout << "Guess the number!" << std::endl;
    std::cout << "Enter your guess: " << std::endl;
    std::cin >> guess;

    if (guess == secret)
    {
        std::cout << "Correct!" << std::endl;
    }
    else
    {
        std::cout << "Incorrect!" << std::endl;
    }
    std::cout << "You guessed " << guess << std::endl;

    
    return 0;
}