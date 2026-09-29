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
    
    while (guess != secret)
    {
        if (guess < secret)
        {
            std::cout << "Guess Higher" << std::endl;
        }
        else
        {
            std::cout << "Guess Lower" << std::endl;
        }
        std::cout << "You guessed " << guess << std::endl;
        std::cout << "Enter your guess: " << std::endl;
        std::cin >> guess;
    }
        
    std::cout << "Correct!" << std::endl;
    
    

    
    return 0;
}