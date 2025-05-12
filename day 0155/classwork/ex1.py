import random

def r_p_s_cheat(choice):
    win = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }

    lose = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }

    if random.random() < 0.9:
        return win[choice]
    else:
        return lose[choice]