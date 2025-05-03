def array(strf):
    strf = strf.split(",")
    if len(strf) >= 3:
        return " ".join(strf[1:-1])
    return None