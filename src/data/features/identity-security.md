---
title: Identity & Password Lifecycle
icon: KeyRound
order: 2
group: foundation
homeFeatured: false
summary: Account provisioning and password lifecycle, backed by ThunderID.
---

- Teacher, student, and parent accounts created from inside OpenSchool, provisioning the matching ThunderID account automatically
- ThunderID self-registration stays off for every role
- NIC-based default passwords for teachers/guardians, index-number defaults for students
- Forced first-login password change via a full-page interstitial
- Self-service "Forgot password?" with a 15-minute, single-use, hash-stored reset link
- Change password any time from the header menu, with a "password changed" email after every change
- Best-effort compensating rollback when ThunderID and the local database fall out of step
