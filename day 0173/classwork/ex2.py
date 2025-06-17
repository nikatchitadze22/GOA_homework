from datetime import datetime

def check_coupon(entered, correct, today, expires):
    if entered != correct:
        return False

    today_date = datetime.strptime(today.strip(), "%B %d, %Y")
    expire_date = datetime.strptime(expires.strip(), "%B %d, %Y")

    return today_date <= expire_date