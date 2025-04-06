# Friendly System Call Interface for Enhanced Security

## Overview

This project introduces a **Friendly System Call Interface (FSCI)** aimed at enhancing **security**, **transparency**, and **ease of use** when interacting with system calls in operating systems. It provides an abstraction layer over traditional system calls, offering a cleaner and more controlled mechanism for applications and developers.

## Motivation

Traditional system call interfaces are often complex, low-level, and error-prone, increasing the attack surface of the operating system. This project proposes a user-friendly interface that simplifies usage and enforces secure patterns by design.

## Key Features

- ✅ High-level, human-readable system call wrappers  
- 🔒 Built-in security checks for access control and parameter validation  
- 🔧 Modular and extensible design  
- 📦 Integration-ready for modern OS kernels  
- 📊 Logging and monitoring capabilities for audit trails

## Architecture

The system architecture consists of the following components:

1. **User Application**  
   - Invokes system functions through the FSCI rather than direct syscalls.
2. **Friendly System Call Interface Layer**  
   - Parses, validates, and routes calls securely to the kernel interface.
3. **Kernel Interface Adapter**  
   - Interfaces with the actual kernel-level system calls after security checks.
4. **Logging & Monitoring Module**  
   - Tracks system calls, detects anomalies, and supports audit logging.

## Project Structure


## Installation

```bash
git clone https://github.com/yourusername/fsci-secure-interface.git
cd fsci-secure-interface
make
sudo make install

## Usage

'''bash
#include "fsci.h"

int fd = fsci_open("secure_file.txt", O_RDONLY);
fsci_read(fd, buffer, sizeof(buffer));
fsci_close(fd);


