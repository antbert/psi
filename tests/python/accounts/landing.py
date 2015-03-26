import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class PSDLanding(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(executable_path="/Applications/chromedriver")

    def testTitle(self):
        driver = self.driver
        driver.get("http://localhost:3000")
        assert "Pseudo-interview" in driver.title

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
