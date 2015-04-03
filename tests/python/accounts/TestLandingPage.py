import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LandingPageTestCase(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()

    def login_link_should_go_to_login_form(self):
        driver = self.driver
        driver.get("http://localhost:3000")
        assert "Pseudo-interview" in driver.title
        login_link = driver.find_element_by_class_name("login-link")
        login_link.click()
        assert "/login" in driver.current_url

    def test_google_icon_should_login_with_google(self):
        self.login_link_should_go_to_login_form()
        driver = self.driver
        google_icon = driver.find_element_by_class_name("google-ico")
        google_icon.click()

        driver.switch_to_window("Login")

        email_field = driver.find_element_by_id("Email")
        passwd_field = driver.find_element_by_id("Passwd")
        sign_in = driver.find_element_by_id("signIn")

        email_field.send_keys("olegruno@gmail.com")
        passwd_field.send_keys("staplesoverjavaEE5219")
        sign_in.click()

        try:
            element_xpath = '//button[@id="submit_approve_access" and not(@disabled)]'
            approve_button = WebDriverWait(driver, 10).until(
                lambda dri: dri.find_element_by_xpath(element_xpath)
            )
            approve_button.click()
            driver.switch_to_window(driver.window_handles[-1])
            assert "/rtc" in driver.current_url
        finally:
            print "END"

    def tearDown(self):
        self.driver.close()