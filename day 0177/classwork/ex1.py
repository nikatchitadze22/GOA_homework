def any_arrows(arrows):
    for arrow in arrows:
        if 'damaged' not in arrow or arrow['damaged'] == False:
            return True
    return False
