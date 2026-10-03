#include <iostream>
#include <cstdlib>
#include <ctime>

int main ()
{
    bool win = false;
    int tries = 0;
    const int maxTries = 3;

    std::srand(std::time(0));

    int secret = std::rand() % 5 + 1;
    int guess;
    std::cout << "Guess the number!" << std::endl;

    
    do
    {
        std::cout << "Enter your guess: " << std::endl;
    
    
        std::cin >> guess;
        tries += 1;



        
        if (guess == secret)
        {
            win = true;
        }
        
        else if (guess < secret)
        {
            std::cout << "Guess Higher" << std::endl;
            std::cout << "Try number: " << tries << std::endl;
        }
        else
        {
            std::cout << "Guess Lower" << std::endl;
            std::cout << "Try number: " << tries << std::endl;
        }
        
    }
    while (tries < maxTries && guess != secret);
    
    if (win)
    {
        std::cout << "You won! Congratulations! You got it in " << tries << " tries!" << std::endl;
    }
    else
    {
        std::cout << "You lost! Try again! The number was " << secret << std::endl;
    }

    
    return 0;
}