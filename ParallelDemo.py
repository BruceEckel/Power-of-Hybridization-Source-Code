# ParallelDemo.py
import random, time, multiprocessing

def long_running():
    delay = random.randrange(2, 12)
    print("Starting: %d" % delay)
    time.sleep(delay)
    print("Finished: %d" % delay)

for n in range(10):
    multiprocessing.Process(target=long_running).start()
