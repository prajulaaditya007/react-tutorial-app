#!/usr/bin/env python3

import json
import os
import sys


def read_package_version():
    with open("package.json") as f:
        data = json.load(f)
    return data.get("version")


def check_version_change():
    old_version = read_package_version()
    os.system("git add package.json")
    os.system("git diff --cached --exit-code")
    new_version = read_package_version()
    if old_version != new_version:
        return True
    else:
        print("No changes to package version. Commit aborted.")
        return False


if __name__ == "__main__":
    if not check_version_change():
        sys.exit(1)
