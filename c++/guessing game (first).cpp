#include <iostream>
#include <cstdlib>
#include <ctime>

int main ()
{
    std::srand(std::time(0));

    int secret = std::rand() % 5 + 1;
    int guess;
    std::cout << "Guess the number!" << std::endl;

    
    do
    {
        std::cout << "Enter your guess: " << std::endl;
    
    
        std::cin >> guess;

        
        if (guess == secret)
        {
            std::cout << "Correct!" << std::endl;
        }
        
        else if (guess < secret)
        {
            std::cout << "Guess Higher" << std::endl;
        }
        else
        {
            std::cout << "Guess Lower" << std::endl;
        }
        
    }
    while (guess != secret);
    
    

    
    return 0;
}